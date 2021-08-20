cd client && ./build.sh
cd -
rm -rf static
cp -r client/public static
deno run -A exportDB.js
