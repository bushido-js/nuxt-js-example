<template>
    <div class="wrapper-container">
          <h1>Информация о доставке</h1>
          <div class="delivery-containers">
              <div>Вариант доставки 1</div>
              <div>Вариант доставки 2</div>
              <div>Вариант доставки 3</div>
              <div>Вариант доставки 4</div>
              <div>Вариант доставки 5</div>
          </div>
      </div>
  </template>
  
  <script>
  export default {
      layout: 'sample',
  }
  </script>
  
  <style lang="scss">
  .delivery-containers {
      display: flex;
      flex-direction: column;
      gap: 20px;
      div {
          background: rgba(128, 128, 128, 0.548);
          width: 100%;
          height: 200px;
          border-radius: 10px;
          font-size: 50px;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
      }
  }
  </style>