# Working with the secret manager

:::warning
This part of the platform is still under heavy development. The API's mentioned are likely to have breaking changes in the future.
:::

The platform contains functionality to publish encrypted data to a running cage such that only the cage can decrypt and read this data.

## Uploading an encrypted file

To encrypt and upload a file to a cage you can either manually fetch the public key of the cage and upload an encrypted file; or automatically encrypt such a file via the console.

### Via the Developer Console

:::info
All these operation are happening in the browser. The unencrypted data is **never** send over the wire.
:::

Navigate to the Collaboration Health page of your collaboration space. Under there you'll find a button labeled "Encrypt and upload".
Pressing the button and selecting a unencrypted file will encrypt this file such that it can only be read by the corresponding cage.


### Manually

To manually encrypt such a file a few steps need to be taken.

1. In the Collaboration Health page download the public key of the cage.
2. Create a random password of 32 bytes, hex encoded.
3. Use this password to AES-256-CBC encrypt the file.
4. Encrypt the symmetric key with the public key of the cage.
5. Create a json file with two properties: `passphrase` holding the encrypted password created in step 4, `content` holding the encrypted content of the file created in step 3.
6. Upload this file to the cage.

We also provide a bash script to do these steps for you.

```bash
source .env # containing the $TOKEN, $SPACE and $API_URL variable
TEMPFOLDER=$(mktemp -d)
FILE=$1
RANDOMPASSWORD=$TEMPFOLDER/randompassword

openssl rand -hex 32 > $RANDOMPASSWORD
openssl aes-256-cbc -md sha256 -pbkdf2 -salt -in $FILE -out $FILE.enc -pass file:$RANDOMPASSWORD

# encrypt the password using rsa key of cage
curl --location "https://$API_URL/collaborationSpaces/$SPACE/publicKey" \
--header "Authorization: Bearer $TOKEN"  > $TEMPFOLDER/publicKey


openssl pkeyutl -encrypt -inkey $TEMPFOLDER/publicKey -pubin -in $RANDOMPASSWORD -out randompassword.encrypted

jq -n --arg passphrase "$(cat randompassword.encrypted | base64)" --arg file "$(cat $FILE.enc | base64)" '{"passphrase":$passphrase, "content": $file}' > message

rm -r $TEMPFOLDER
```

## Decrypting a file in the cage

The algorithm running in the cage does not have access to the private key. But it does have access to the secret manager.
You can simply make a call to the `/decrypt` endpoint of the secret manager.

```
curl --location "http://secret-manager/decrypt" --form 'file=@message'
```