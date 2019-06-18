import * as ml5 from 'ml5';

const images = Array.from(document.querySelectorAll('img'));

const gotResult = (
  error: Error,
  results: { label: string; confidence: number }[],
) => {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
  }
};

(async () => {
  const classifier = await ml5.imageClassifier('MobileNet');

  images.forEach(image => classifier.classify(image, gotResult));
})();
