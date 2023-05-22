// const fs = require("fs");
// const path = require("path");
// const utils = require("util");
// const puppeteer = require("puppeteer");
// const hb = require("handlebars");
// const readFile = utils.promisify(fs.readFile);

// export async function getTemplateHtml(htmlTemplate) {
//   console.log("Loading template file in memory");
//   try {
//     const filePath = path.resolve(htmlTemplate);
//     return await readFile(filePath, "utf8");
//   } catch (err) {
//     return Promise.reject("Could not load html template");
//   }
// }

// export var htmlFileToPdfFile = async function (data,htmlTemplate) {
//   return new Promise(async function (resolve, reject) {
//     //         let data = {
//     //            “key”:value,
//     //  “key”:value,
//     //  “key”:value,
//     //         };

  

//     await getTemplateHtml(htmlTemplate)
//       .then(async (res) => {
//         // Now we have the html code of our template in res object
//         // you can check by logging it on console
//         // console.log(res)
//         console.log("Compiing the template with handlebars");
//         const template = hb.compile(res, { strict: true });
//         // we have compile our code with handlebars
//         const result = template(data);
//         // We can use this to add dyamic data to our handlebas template at run time from database or API as per need. you can read the official doc to learn more https://handlebarsjs.com/
//         const html = result;
//         // we are using headless mode
//         const browser = await puppeteer.launch();
//         const page = await browser.newPage();
//         // We set the page content as the generated html by handlebars
//         await page.setContent(html);
//         // We use pdf function to generate the pdf in the same folder as this file.
//         const output = "./mypd";
//         const height = await page.evaluate(
//           () => document.documentElement.offsetHeight
//         );
//         await page.pdf({
//           path: output,
//         //   type: "A4",
//           height: `${height + 1} px`,
//           printBackground: true,
//         });
//         await browser.close();
//         console.log("Done PDF Generated");
//         process.exit();

//         console.log("test")
//         resolve(output);
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   });
// };

// // (async () => {
// //   try {
// //     const browser = await puppeteer.launch();
// //     const page = await browser.newPage();
// //     // We set the page content as the generated html by handlebars
// //     await page.setContent("<h1>basil mohammed</h1>");
// //     await page.emulateMediaFeatures('screen')
// //     // We use pdf function to generate the pdf in the same folder as this file.
 
// //     await page.pdf({
// //       path: "output.pdf",
// //       height: "A4",
// //       //   height: `${height + 1} px`,
// //       printBackground: true,
// //     });
// //     console.log("Done PDF Generated");
// //     await browser.close();
// //     process.exit();
// //   } catch (err) {
// //     console.error(err);
// //   }
// // })();

