
![Novel Frame](https://github.com/TH-Activities/saturday-hack-night-template/assets/90635335/4c26e8ac-2dd1-4d75-8e1a-9f7585e3b381)


# Nothing To See Here 
NSH is the abbreviation for "Nothing to See Here," a state-of-the-art [WYSIWYG](https://www.google.com/search?q=WYSIWYG) (What You See Is What You Get) application meticulously designed with a hacker's mentality. Crafted by Hackers, with Hackers for Hackers, NSH seamlessly fuses [Novel](https://github.com/steven-tey/novel) technology with the dynamic capabilities of React JS and Express JS. The entire system is turbocharged by the formidable prowess of OpenAI, delivering an unparalleled experience for users who demand precision, power, and a touch of the unconventional.
![image](https://github.com/Sudheeshspai/SNH/assets/81918189/225d04a6-1743-4aa4-948d-e9552bc9ab07)
![image](https://github.com/Sudheeshspai/SNH/assets/81918189/b3b0efe3-5aaf-4471-b567-f544be0eaecf)
![image](https://github.com/Sudheeshspai/SNH/assets/81918189/13c8c817-07e2-47da-bca0-13fe30bc2e34)

## Team members
1. [Athul Prakash NJ](https://github.com/psychoSherlock)
2. [Sudheesh](https://github.com/Sudheeshspai)
3. [Aditya R Menon](https://github.com/adityarmenon)
## Link to product walkthrough
[link to video](https://drive.google.com/file/d/1Wg51emnF0kyRaModUckOzLipJdzm6qCo/view)
## How it Works ?
 The project works mainly powered by Novel and OpenAI. A react server is hosted on port 3000 and a express server on port 5000. 
 The OpenAI prompts will be sent to /api/generate. Which will sent the prompt to chatgpt's `gpt-3.5-turbo` model. Note that for the AI to work u need to add OPENAI_KEY to a .env file.
## Libraries used
React JS
Express JS
Novel Js
OpenAI
## How to configure
```bash
git clone https://github.com/Sudheeshspai/SNH
npm install
cd server
npm install
cd ../client/snh/
npm install
cd ../..

```
## How to Run
Instructions for running
For OpenAI to work, you need to add `OPENAI_KEY=<KEY>` to a `.env` file
```bash
npm start
```
