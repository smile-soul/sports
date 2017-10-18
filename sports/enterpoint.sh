#!/usr/bin/env bash
set -e
cd /opt
ls
npm run dev

exec "$@"
