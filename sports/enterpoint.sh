#!/usr/bin/env bash
set -e
cd /opt
ls
npm start

exec "$@"
