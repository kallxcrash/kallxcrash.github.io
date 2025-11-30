#!/bin/bash

echo "=== Tambah Username Baru ==="
read -p "Masukkan username: " user

curl -X POST https://YOUR_BACKEND_URL_HERE/adduser \
     -H "Content-Type: application/json" \
     -d "{\"username\":\"$user\"}"

echo
echo "Username berhasil ditambahkan!"