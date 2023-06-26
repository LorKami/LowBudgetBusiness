import React, { useState, useRef, useEffect } from 'react';

import html2canvas from 'html2canvas';
import download from 'downloadjs';

import '../LbbGenerator/LbbGenerator.css';
import optionsData from '../LbbGenerator/LbbGenerator.json';

const LbbGenerator = () => {

  const backgrounds = optionsData.backgrounds;
  const barrels = optionsData.barrels;
  const bodys = optionsData.bodys;
  const mouths = optionsData.mouths;
  const clothess = optionsData.clothess;
  const hats = optionsData.hats;
  const letters = optionsData.letters;


  const getRandomOption = (options) => {
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
  };

  const [selectedOptions, setSelectedOptions] = useState({
    background: getRandomOption(optionsData.backgrounds),
    barrel: getRandomOption(optionsData.barrels),
    body: getRandomOption(optionsData.bodys),
    mouth: getRandomOption(optionsData.mouths),
    clothes: getRandomOption(optionsData.clothess),
    hat: getRandomOption(optionsData.hats),
    letter: getRandomOption(optionsData.letters),
  });

  const imageRef = useRef(null);

  useEffect(() => {
    loadImages().then(() => {
      renderSelectedImages(imageRef.current);
    });
  }, [selectedOptions]);

  const loadImages = () => {
    return new Promise((resolve, reject) => {
      const images = Object.values(selectedOptions)
        .filter((option) => option !== null && option.image)
        .map((option) => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve();
            img.onerror = () => reject();
            img.src = option.image;
          });
        });

      Promise.all(images)
        .then(() => resolve())
        .catch(() => reject());
    });
  };

  const handleOptionSelect = (category, option) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [category]: option,
    }));
  };

  const renderSelectedImages = (canvas) => {
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);

    Object.values(selectedOptions).forEach((option) => {
      if (option !== null && option.image) {
        const img = new Image();
        img.src = option.image;
        context.drawImage(img, 0, 0, canvas.width, canvas.height);
      }
    });
  };

  const handleDownloadImage = () => {
    const canvas = imageRef.current;

    html2canvas(canvas)
      .then((canvas) => {
        const dataUrl = canvas.toDataURL('image/png');
        download(dataUrl, 'lbb_image.png');
      })
      .catch((error) => {
        console.error('Error al descargar la imagen:', error);
      });
  };

  return (
    <div>
      <div className='MenuSection'>
      <div className='MenuSectionInfo'>
          <h3>LBB POWER</h3>
          <h2>LBB GENERATOR</h2>
          <p>Unleash your creative prowess as you craft your very own LBB creatures, carefully selecting from our captivating array of traits. Whether you're seeking a playful companion or a mysterious creature, our trait selection has something to suit every imagination.</p>
          <p>Stay tuned as we regularly update this page with exciting new traits, unveiling the endless possibilities of LBB creatures.</p>
          <p>And remember, the realm of LBB is teeming with extraordinary creatures just waiting to be discovered. Let your imagination roam free as you embark on an unforgettable journey through the wondrous world of LBB. Get ready to create, explore, and marvel at the wonders that await you!</p>
          </div>
        <div className='MenuSectionJustify'>  
        <div className='MenuSectionLeft'>

          <div className='MenuList'>
            <h2>Background</h2>
            <select className='SelectNav'
              value={selectedOptions.background ? selectedOptions.background.id : ''}
              onChange={(e) =>
                handleOptionSelect('background', backgrounds.find((background) => background.id === e.target.value)
                )
              }
            >
              {backgrounds.map((background) => (
                <option key={background.id} value={background.id}>
                  {background.name}
                </option>
              ))}
            </select>
          </div>

          <div className='MenuList'>
            <h2>Hat</h2>
            <select className='SelectNav'
              value={selectedOptions.hat ? selectedOptions.hat.id : ''}
              onChange={(e) =>
                handleOptionSelect('hat', hats.find((hat) => hat.id === e.target.value))
              }
            >
              {hats.map((hat) => (
                <option key={hat.id} value={hat.id}>
                  {hat.name}
                </option>
              ))}
            </select>
          </div>

          <div className='MenuList'>
            <h2>Body</h2>
            <select className='SelectNav'
              value={selectedOptions.body ? selectedOptions.body.id : ''}
              onChange={(e) =>
                handleOptionSelect('body', bodys.find((body) => body.id === e.target.value))
              }
            >
              {bodys.map((body) => (
                <option key={body.id} value={body.id}>
                  {body.name}
                </option>
              ))}
            </select>
          </div>

          <div className='MenuList'>
            <h2>Barrel</h2>
            <select className='SelectNav'
              value={selectedOptions.barrel ? selectedOptions.barrel.id : ''}
              onChange={(e) =>
                handleOptionSelect('barrel', barrels.find((barrel) => barrel.id === e.target.value))
              }
            >
              {barrels.map((barrel) => (
                <option key={barrel.id} value={barrel.id}>
                  {barrel.name}
                </option>
              ))}
            </select>
          </div>

          <div className='MenuList'>
            <h2>Letters</h2>
            <select className='SelectNav'
              value={selectedOptions.letter ? selectedOptions.letter.id : ''}
              onChange={(e) =>
                handleOptionSelect('letter', letters.find((letter) => letter.id === e.target.value))
              }
            >
              {letters.map((letter) => (
                <option key={letter.id} value={letter.id}>
                  {letter.name}
                </option>
              ))}
            </select>
          </div>

          <div className='MenuList'>
            <h2>Clothes</h2>
            <select className='SelectNav'
              value={selectedOptions.clothes ? selectedOptions.clothes.id : ''}
              onChange={(e) =>
                handleOptionSelect('clothes', clothess.find((clothes) => clothes.id === e.target.value))
              }
            >
              {clothess.map((clothes) => (
                <option key={clothes.id} value={clothes.id}>
                  {clothes.name}
                </option>
              ))}
            </select>
          </div>

          <div className='MenuList'>
            <h2>Mouth</h2>
            <select className='SelectNav'
              value={selectedOptions.mouth ? selectedOptions.mouth.id : ''}
              onChange={(e) =>
                handleOptionSelect('mouth', mouths.find((mouth) => mouth.id === e.target.value))
              }
            >
              {mouths.map((mouth) => (
                <option key={mouth.id} value={mouth.id}>
                  {mouth.name}
                </option>
              ))}
            </select>
          </div>

          <div className='DwImage'>
              <button onClick={handleDownloadImage}>Download</button>
            </div>

        </div>

        <div className='MenuSectionRight'>
            <canvas ref={imageRef} width={1200} height={1200} className='GeneratedImage' />
          </div>

      </div>
    </div>
    </div>
  );
};

export default LbbGenerator;
