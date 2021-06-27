node -c index.js
cd commands
find -name "*.js" | xargs sh -c "node -c $1 || exit 255"