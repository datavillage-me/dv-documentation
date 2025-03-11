---
title: Encrypt File
---

# Encrypt File

This script automates the process of encrypting data files for secure storage using DuckDB. It reads CSV or JSON files from an input folder, converts any date columns to TIMESTAMP, and then encrypts the data. The encrypted data is saved as a Parquet file in an output folder, with the encryption key provided via a key file.

## What the Script Does

- **Reads and Converts Files:**  
  Loads data from CSV or JSON files, detects date columns, and converts them to TIMESTAMP.

- **Encrypts Data with DuckDB:**  
  Creates a temporary table from the file’s data, encrypts it using an encryption key read from a key file, and writes the encrypted data to a Parquet file.

- **Processes an Entire Folder:**  
  Processes all files in a specified input folder and saves the encrypted Parquet files to an output folder.

- **Encryption Key Handling:**  
  Reads an encryption key from a key file and uses it during the encryption process.

## How to Use the Script

1. **Prepare Your Environment:**  
   - Ensure you have Python installed along with the required packages (`duckdb`, `pandas`).  
   - Place your data files (CSV or JSON) in a folder (this will be your **input folder**).  
   - Create a **key file** containing your encryption key.

2. **Run the Script:**  
   Open your terminal and execute the following command (copy it exactly as shown):

```bash
python encrypt_file.py <input_folder> <output_folder> <key_file>
```

Replace:
- `<input_folder>` with the path to the folder containing your CSV/JSON files.
- `<output_folder>` with the path where you want the encrypted Parquet files to be saved.
- `<key_file>` with the path to the file that contains your encryption key.

**Example:**

```bash
python encrypt_file.py ./data/input ./data/output ./keys/encryption_key.txt
```

3. **Verify the Output:**  
   After running the script, check the output folder for the encrypted Parquet files. Terminal messages will indicate whether each file was successfully processed and encrypted.

## Full Script Code

Below is the complete Python script for reference:

```python
import duckdb
import sys
import os
import pandas as pd

# Constants
DB_FILE = "encrypted_secret_notation.duckdb"
KEY_NAME = "key256"

def read_and_convert_file(file_path):
    """Reads CSV or JSON and detects which columns contain dates. Converts them to TIMESTAMP."""
    if not os.path.exists(file_path):
        print(f"❌ Error: File '{file_path}' not found!")
        return None

    file_ext = file_path.split(".")[-1].lower()
    try:
        if file_ext == "csv":
            df = pd.read_csv(file_path)
        elif file_ext == "json":
            df = pd.read_json(file_path)
        else:
            print(f"❌ Error: Unsupported file format for {file_path}. Skipping.")
            return None
    except Exception as e:
        print(f"❌ Error reading file {file_path}: {e}")
        return None

    for col in df.columns:
        try:
            df[col] = pd.to_datetime(df[col], errors='raise')
        except Exception:
            pass

    return df

def encrypt_data(con, parquet_file, key_value):
    """Encrypts the data and saves it as a Parquet file."""
    con.execute(f"PRAGMA add_parquet_key('{KEY_NAME}', '{key_value}');")
    con.execute(f"""
        COPY data TO '{parquet_file}'
        (FORMAT 'parquet', ENCRYPTION_CONFIG {{footer_key: '{KEY_NAME}'}})
    """)
    print(f"🔒 Encrypted Parquet file saved as {parquet_file}")

def process_folder(input_folder, output_folder, key_file):
    """Processes all files in a folder, encrypts them, and saves as Parquet."""
    if not os.path.exists(key_file):
        print("❌ Error: Encryption key file not found!")
        sys.exit(1)
    
    with open(key_file, "r") as f:
        key_value = f.read().strip()
    
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)
    
    con = duckdb.connect()
    
    for file_name in os.listdir(input_folder):
        file_path = os.path.join(input_folder, file_name)
        df = read_and_convert_file(file_path)
        if df is not None:
            parquet_file = os.path.join(output_folder, f"{os.path.splitext(file_name)[0]}.parquet")
            con.register('df', df)
            con.execute("CREATE TABLE data AS SELECT * FROM df")
            encrypt_data(con, parquet_file, key_value)
            con.execute("DROP TABLE data")
    
    con.close()

if __name__ == "__main__":
    if len(sys.argv) < 4:
        print("❌ Error: Please provide input folder, output folder, and key file.")
        sys.exit(1)
    
    input_folder = sys.argv[1]
    output_folder = sys.argv[2]
    key_file = sys.argv[3]
    
    process_folder(input_folder, output_folder, key_file)
