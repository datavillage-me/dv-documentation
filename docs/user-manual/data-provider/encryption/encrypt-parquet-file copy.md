---
title: Encrypt File with DuckDB CLI
---

# Encrypt File with DuckDB CLI

This guide explains how to encrypt your data files using DuckDB’s command-line interface. Instead of running a Python script, you'll execute DuckDB commands directly to encrypt CSV, JSON, or Parquet files. Be sure to have DuckDB installed on your system before proceeding.

## Requirements

- **DuckDB Installation:**  
  Ensure DuckDB is installed. You can download it from [DuckDB](https://duckdb.org).

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