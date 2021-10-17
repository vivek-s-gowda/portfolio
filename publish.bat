git add .
git commit -m "changes from script"
git push 
ng build --prod --base-href "https://vivek-s-gowda.github.io/portfolio/"
npx angular-cli-ghpages --dir=dist/portfolio