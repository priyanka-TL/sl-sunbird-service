FROM node:12

WORKDIR /manage-learn-services/sl-sunbird-service

#copy package.json file
COPY package.json /manage-learn-services/sl-sunbird-service

#install node packges
RUN npm install

#copy all files 
COPY . /manage-learn-services/sl-sunbird-service

#expose the application port
EXPOSE 4551

#start the application
CMD node app.js
