import * as docx from "docx";

export class GenerateDocxService {

    static async generateDocx(): Promise<docx.Document>{
        let docs = new docx.Document(
            {
                sections:[
                    {
                        children: [
                            new docx.Paragraph({
                                text:"JUDUL",
                                heading: "Heading4",
                                alignment: "center"
                            })
                        ]
                    }
                ]
            }
        );
        return docs;
    }
}