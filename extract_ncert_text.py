import pymupdf
import os

def extract_text_from_pdfs(source_dir, output_dir):
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
        
    for filename in os.listdir(source_dir):
        if filename.endswith(".pdf"):
            pdf_path = os.path.join(source_dir, filename)
            doc = pymupdf.open(pdf_path)
            text = ""
            for page in doc:
                text += page.get_text()
            
            output_filename = filename.replace(".pdf", ".txt")
            output_path = os.path.join(output_dir, output_filename)
            
            with open(output_path, "w", encoding="utf-8") as f:
                f.write(text)
            print(f"Extracted: {filename} -> {output_filename}")

if __name__ == "__main__":
    src = r"C:\Users\Admin\Neil\XII-Commerce\SQPs\BS-Chapters"
    out = r"C:\Users\Admin\Neil\XII-Commerce\SQPs\extracted_text"
    extract_text_from_pdfs(src, out)
