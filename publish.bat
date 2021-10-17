echo "Adding Local changes ....."
git add .
echo "Adding Local changes completed ....."
git commit -m "changes from script"
echo "Added Commit message ....."
echo "Pushing your changes to git ...."
git push 
echo "Deploying code to github pages ....."
ng build --prod --base-href "https://vivek-s-gowda.github.io/portfolio/"
npx angular-cli-ghpages --dir="dist/portfolio"
echo "Your code successfully deployed :)"