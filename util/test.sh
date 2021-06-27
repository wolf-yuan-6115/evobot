node -c index.js
cd commands
find -name "*.js" | xargs sh -c "node -c $0" || exit 255