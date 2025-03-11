# Create Encryption Key

This page explains how to generate a 256-bit encryption key for DuckDB using Python’s built-in `secrets` module. The key is generated as 32 random bytes (256 bits) and is then converted into a 64-character hexadecimal string for easy use.

Below is the Python script:

```python
import secrets

# Generate 32 random bytes (256 bits) and convert to a 64-character hex string
duckdb_key = secrets.token_hex(32)
print("256-bit key for DuckDB:", duckdb_key)
