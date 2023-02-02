import FileSaver from "file-saver";
import { surpriseMePrompts } from "../constants";

export const getRandomPrompt = (prompt) => {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const randomPropmt = surpriseMePrompts[randomIndex];

  if (randomPropmt === prompt) return getRandomPrompt(prompt);

  return randomPropmt;
};

export const downLoadImage = (id, photo) => {
  //*servira para poder descargar la imagen ya que algunos navegadores no lo soportan nativamente
  FileSaver.saveAs(photo, `download-${id}.jpg`);
};
