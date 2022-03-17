// 음료 클래스
class Drink {
  constructor(name, price, stock) {
    this.name = name;
    this.price = price;
    this.stock = stock;
  }
}

const coke = new Drink("콜라", 1100, 10);
const water = new Drink("물", 600, 10);
const coffee = new Drink("커피", 700, 10);

const drinks = [coke, water, coffee];

// 자판기 클래스
class VendingMachine {
  constructor(change, payment) {
    this.change = change; // 자판기가 사용자에게 받은 금액을 저장하는 용도
    this.payment = payment; // 사용자가 결제할 수단을 저장하는 용도
  }

  getCash(cash) {
    this.payment = "cash";
    if (cash < 100 || cash == 50000) {
      console.log(
        `100원, 500원, 1,000원, 5,000원, 10,000원권만 사용 가능합니다.`
      );
      this.returnUnavailable(cash);
    } else {
      // 정상적인 현금 투입
      this.change += cash; // 투입한 금액은 자판기에 잔액으로 누적
      console.log(`투입 금액: ${this.change}원`);
      this.showAvailableDrinks(this.change);
    }
  }

  getCard(card) {
    this.payment = "card";
    const promise = new Promise((resolve, reject) => {
      console.log("카드 확인중...");

      // 데이터를 받아오는 과정(시간)을 가정하기 위해서 setTimeout함수 사용
      setTimeout(() => {
        resolve(`${card} 사용 문제 없음`);
      }, 2000);
    });

    promise
      .then((creditData) => {
        console.log(`${creditData} 확인`);
        this.showAvailableDrinks("card");
      })
      .catch((error) => {
        console.log(`카드 인식 오류: ${error} 발생`);
        this.payment = null; // 결제수단 초기화
      });
  }

  showAvailableDrinks(insertedCash) {
    // 구매가능한 음료를 보여주는 함수
    const soldOut = drinks.filter((drink) => drink.stock == 0); // 매진된 음료리스트
    const inStock = drinks.filter((drink) => drink.stock > 0); // 재고가 있는 음료리스트

    if (soldOut.length > 0) {
      console.log(`매진된 음료:${soldOut}`);
    }

    if (this.payment == "card") {
      // 카드 결제시
      console.log(`구매 가능한 음료수는 다음과 같습니다.`);
      inStock.forEach((drink) =>
        console.log(`제품명:${drink.name} 가격:${drink.price}`)
      );
    } else {
      // 현금 결제시
      const availableDrinks = inStock.filter(
        (drink) => drink.price <= insertedCash
      );
      if (availableDrinks.length > 0) {
        console.log(`구매 가능한 음료수는 다음과 같습니다.`);
        availableDrinks.forEach((drink) =>
          console.log(`제품명:${drink.name} 가격:${drink.price}`)
        );
      } else {
        console.log(`현재 금액으로 구매 가능한 음료수가 없습니다.`);
      }
    }
  }

  // 사용 불가능한 현금 단위를 반환하는 함수
  returnUnavailable(cash) {
    console.log(`${cash}원이 반환되었습니다.`);
  }

  // 음료를 선택해 결제하는 함수
  selectDrink(drink) {
    if (this.payment == "cash") {
      // 현금 결제
      if (drink.price < this.change) {
        const change = this.change - drink.price;
        this.returnChange(change);
      }
      console.log(`${drink.name} 구매가 완료되었습니다.`);
      this.payment = ""; // 결제수단 초기화
      drink.stock -= 1; // 재고 차감
    } else {
      // 카드 결제
      const promise = new Promise((resolve, reject) => {
        console.log("결제중...");

        // 데이터를 받아오는 과정(시간)을 가정하기 위해서 setTimeout함수 사용
        setTimeout(() => {
          resolve(`결제 완료`);
        }, 2000);
      });

      promise
        .then((result) => {
          console.log(result);
          drink.stock -= 1; // 재고 차감
        })
        .catch((error) => {
          console.log(`결제 오류: ${error}`);
          this.payment = null; // 결제수단 초기화
        });
    }
  }

  // 돈을 반환하는 함수
  returnChange(returnCash) {
    console.log(`${returnCash}원이 반환되었습니다`);
    this.change = 0;
    this.payment = "";
  }
}
