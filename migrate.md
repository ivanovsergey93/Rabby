git remote add upstream git@github.com:RabbyHub/Rabby.git # only first time
git fetch --tags upstream
git checkout v0.92.80
git checkout -b v0.92.80_no_export
git merge v0.92.79_no_export

nvm use 20
yarn
yarn build:pro
