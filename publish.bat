echo "Adding Local changes ....."
git add .
echo "Adding Local changes completed ....."
git commit -m "changes from script"
echo "Added Commit message ....."
echo "Pushing your changes to git ...."
git push 
echo "Deploying code to github pages ....."
ng build --prod --base-href "https://vivek-s-gowda.github.io/portfolio/"
echo "Run this to pulish \"npx angular-cli-ghpages --dir=dist/portfolio\""
npx angular-cli-ghpages --dir=dist/portfolio
echo "Your code successfully deployed :)"