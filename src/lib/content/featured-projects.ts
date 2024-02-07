import { FeaturedProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

const featuredProjectsSection: FeaturedProjectsSectionType = {
  title: "projects i've worked on",
  projects: [
    {
      id: getId(),
      name: 'Biometric Facial Recognition using Convolutional Neural Networks',
      description: '',
      tasks:
        'Implemented a highly accurate biometric facial recognition system leveraging a Siamese Neural Network (SNN) trained on the LFW dataset. Conducted a comparative analysis, showcasing a 10% performance boost over hyper-parameter-tuned CNNs, achieving an impressive 98% accuracy.',
      url: 'https://github.com/Vaibhav-Sachdeva/Biometric-Facial-Recognition-using-Siamese-Neural-Network',
      img: '/biometric-facial-recognition.png',
      tags: [],
    },
    {
      id: getId(),
      name: 'Stock Price Correlation Coefficient Prediction',
      description: '',
      tasks:
        'Developed a hybrid deep learning model, merging ARIMA and LSTM (RNNs), to predict S&P 500 stock price correlations. Outperformed traditional models with a 50% MSE reduction, showcasing superior accuracy for effective portfolio optimization.',
      url: 'https://github.com/Vaibhav-Sachdeva/Correlation-Coefficient-Prediction-using-ARIMA-LSTM-Hybrid-Model',
      img: '/stock-price-correlation.PNG',
      tags: [],
    },
    {
      id: getId(),
      name: 'Chest X-ray Pneumonia Detection',
      description: '',
      tasks:
        'Designed and implemented a CNN from scratch for pneumonia detection in chest X-ray images, achieving an accuracy of 85%. Additionally, employed transfer learning with models like VGG19, ResNet50, and MobileNet, achieving a an accuracy of 92%.',
      url: 'https://github.com/Dhruv590/Pneumonia-Detection-on-Chest-Xrays',
      img: '/detection-pneumonia.png',
      tags: [],
    },
    {
      id: getId(),
      name: 'Breast Cancer Prediction using Machine Learning',
      description: '',
      tasks:
        'Implemented machine learning models to distinguish between benign and malignant mammary tumors, utilizing algorithms like ANNs, Random Forests, SVM, and KNN in Python, achieving high accuracy. Conducted a comparative study evaluating model performance with metrics such as accuracy, precision, recall, and F1 score, providing valuable insights into optimal tumor diagnosis methods.',
      url: 'https://github.com/Vaibhav-Sachdeva/Breast-Cancer-Prediction-using-Machine-Learning',
      img: '/breast-cancer.png',
      tags: [],
    },
  ],
};

export default featuredProjectsSection;
