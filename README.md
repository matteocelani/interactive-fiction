# 🏆 Contract for Interactive Fiction

This folder contains the smart contract for the creation of the crypted answers for the Interactive Fiction game of the treasure hunt of Roseto degli Abruzzi 2022.


## ⚙️ Setting the Game 

The answers are a in a two-dimensional array. For example:

```javascript
[[aa, ab, ac, ad],  // game 1
 [ba, bb, bc, bd],  // game 2
 [ca, cb, cc, cd],  // game 3
 [da, db, dc, dd]]  // game 4
```

With the function `setAnswer` you can set a crypted answer for a specific question. 
```solidity
 function setAnswer(bytes32 _answer, uint8 _game, uint8 _index)
 ```

Each game has a start date, which you can set with the function `setStartGame`.
```solidity
 function setStartGame(uint _timestamp, uint8 _game)
 ```

Each game ends when the next game begins. For example, if game one starts on 8 August 2022 and game two starts on 9 August 2022, game one ends on 9 August at midnight. \
All games are no longer accessible after the end date, which can be set with the function `setEndGame`.
```solidity
 function setEndGame(uint _timestamp)
 ```

## 📝 Checking Answers

The function `isCorrect` checks if the answer is correct.
```solidity
 function isCorrect(string memory _answer, uint8 _game, uint8 _index)
 ```