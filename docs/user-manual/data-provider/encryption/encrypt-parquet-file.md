---
title: Encrypt File with DuckDB CLI
---

# Encrypt File with DuckDB CLI

This guide explains how to encrypt your data files using DuckDB’s command-line interface. You'll execute one DuckDB command directly to encrypt CSV, JSON, or Parquet files.    
Be sure to have DuckDB installed on your system before proceeding.

## Requirements

- **DuckDB Installation:**  
  Ensure DuckDB is installed. You can download it from [DuckDB](https://duckdb.org/docs/installation/?version=stable&environment=cli&platform=macos&download_method=direct).

- **Supported File Formats:**  
  Your input file must be in one of the following formats: CSV, JSON, or Parquet.

- **Encryption Key:**  
  You need an encryption key. In the examples below, the key is set using a key name (`key256`) and a key value (`01234567891123450123456789112345`). Replace these placeholders with your chosen key name and your actual encryption key.

## Encryption Commands

Use the appropriate command based on your file type.

### For CSV Files

```bash
duckdb -c "PRAGMA add_parquet_key('key256', '01234567891123450123456789112345');" \
-c "CREATE TABLE data AS SELECT * FROM read_csv('input_file.csv');" \
-c "COPY data TO 'output_file.parquet' (ENCRYPTION_CONFIG {footer_key: 'key256'});"
 ```

 ### For JSON Files
```bash
duckdb -c "PRAGMA add_parquet_key('key256', '01234567891123450123456789112345');" \
-c "CREATE TABLE data AS SELECT * FROM read_json('input_file.json');" \
-c "COPY data TO 'output_file.parquet' (ENCRYPTION_CONFIG {footer_key: 'key256'});"
 ```

  ### For Parquet Files
```bash
duckdb -c "PRAGMA add_parquet_key('key256', '01234567891123450123456789112345');" \
-c "CREATE TABLE data AS SELECT * FROM read_parquet('input_file.parquet');" \
-c "COPY data TO 'output_file.parquet' (ENCRYPTION_CONFIG {footer_key: 'key256'});"
 ```

 ## Customization Instructions

Before running any command, update the following parameters:

**Input file:**  
Replace `input_file.csv` (or `.json`/`.parquet` depending on your file type) with the actual name of your input file.

**Output file:**  
Replace `output_file.parquet` with your desired output file name.

**Encryption Key:**  
Replace `01234567891123450123456789112345` with your actual encryption key. If you change the key name (currently `key256`), update it in both the `PRAGMA` and `COPY` commands.

## Example

For instance, if you have a CSV file named `mule_accounts.csv`, want to create an encrypted file named `mule_accounts_encrypted.parquet`, and your encryption key is `09528bfd444ccbd1891ac54f627dab3b`, your command would be:

```bash
duckdb -c "PRAGMA add_parquet_key('key256', '09528bfd444ccbd1891ac54f627dab3b');" \
-c "CREATE TABLE data AS SELECT * FROM read_csv('mule_accounts.csv');" \
-c "COPY data TO 'mule_accounts_encrypted.parquet' (ENCRYPTION_CONFIG {footer_key: 'key256'});"
```