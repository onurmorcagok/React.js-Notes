import React from "react";
import ReactDOM from "react-dom";

import Card from "./components/Card";
import Collapse from "./components/Collapse";

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="card-group w-100">
          <div className="col">
            <Collapse href="collapsExample1">
              <Card
                cardTitle="Peugeot"
                cardText="Peugeot, Fransız otomobil, bisiklet ve motosiklet markası, günümüzde PSA Peugeot Citroën`in bir parçasıdır. 1810 yılında el aletleri ile üretime başlamıştır, 1890 yılından bu yana da otomobil üreticisidir. Türkiye'deki ticari faaliyetlerini Peugeot Otomotiv Pazarlama A.Ş. şirketi üzerinden yürütmektedir."
                updateTime="Last updated 10 min ago"
                cardImage="https://www.tech-worm.com/wp-content/uploads/2016/07/peugeot-logo.jpg"
              />
            </Collapse>
          </div>
          <div className="col">
            <Collapse href="collapsExample2">
              <Card
                cardTitle="Wolksvagen"
                cardText="Volkswagen AG, Almanya'da, 1937 yılında tek model halk tipi otomobil üretimi için Nasyonal Sosyalist Alman İşçi Partisi tarafından Alman Otomotiv Birliği'ne kurdurulan otomobil firması. Şirketin adı, Almanca'da halkın arabası anlamına gelmektedir."
                updateTime="Last updated 15 min ago"
                cardImage="https://cdn.motor1.com/images/mgl/nnbql/s3/volkswagen-previous-logo.jpg"
              />
            </Collapse>
          </div>
          <div className="col">
            <Collapse href="collapsExample3">
              <Card
                cardTitle="Hyundai"
                cardText="Hyundai Motor Company, Güney Kore merkezli çok uluslu otomotiv firması. Korece Hyundai kelimesinin Türkçe karşılığı çağdaş, modern anlamındadır. Kia Motors, Genesis Motors, Hyundai Motor Group'un kuruluşudur."
                updateTime="Last updated 20 min ago"
                cardImage="https://www.ottomanotoanahtar.com/wp-content/uploads/2017/12/hyundai-anahtar.png"
              />
            </Collapse>
          </div>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
