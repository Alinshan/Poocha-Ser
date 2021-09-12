FROM fusuf/whatsasena:latest

RUN git clone https://github.com/CYBER-DASHAMOOLAN/Poocha-Ser /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
RUN git clone https://github.com/CYBER-DASHAMOOLAN/uploads
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit


CMD ["node", "bot.js"]
