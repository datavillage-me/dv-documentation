---
title: Decrypt File with DuckDB CLI
---

# Decrypt File with DuckDB CLI

This guide explains how to decrypt your data files using DuckDB’s command-line interface. You'll execute one DuckDB command directly to decrypt Parquet files.    
Be sure to have DuckDB installed on your system before proceeding.

## Requirements

- **DuckDB Installation:**  
  Ensure DuckDB is installed. You can download it from [DuckDB](https://duckdb.org/docs/installation/?version=stable&environment=cli&platform=macos&download_method=direct).


- **Decryption Key:**  
  You need an Decryption key. In the examples below, the key is set using a key name (`key256`) and a key value (`01234567891123450123456789112345`). Replace these placeholders with your chosen key name and your actual decryption key.

## Decryption Commands

Use the appropriate command based on your output file type.

```bash
duckdb  -c "PRAGMA add_parquet_key('key256', '01234567891123450123456789112345');" \
-c  "CREATE TABLE data AS SELECT * FROM read_parquet('output_file_encrypted.parquet',encryption_config = {footer_key: 'key256'});" \
 -c  "COPY data to 'output_file.csv'"
 ```

 ## Customization Instructions

Before running any command, update the following parameters:

**Input file:**  
Replace `output_file_encrypted.parquet` with the actual name of your encrypted parquet file.

**Output file:**  
Replace `output_file.csv` (or `.json`/`.parquet` depending on your file type) with your desired output file name. 

**Decryption Key:**  
Replace `01234567891123450123456789112345` with your actual Decryption key. If you change the key name (currently `key256`), update it in both the `PRAGMA` and `CREATE` commands.

## Example

For instance, if you have a encrypted parquet file named `mule_accounts_encrypted.parquet`, want to create an decrypted file named `mule_accounts_decrypted.parquet`, and your key is `09528bfd444ccbd1891ac54f627dab3b`, your command would be:

```bash
duckdb  -c "PRAGMA add_parquet_key('key256', '09528bfd444ccbd1891ac54f627dab3b');" \
-c  "CREATE TABLE data AS SELECT * FROM read_parquet('mule_accounts_encrypted.parquet', encryption_config = {footer_key: 'key256'});" \
-c  "COPY data to 'mule_accounts_decrypted.parquet'"
```