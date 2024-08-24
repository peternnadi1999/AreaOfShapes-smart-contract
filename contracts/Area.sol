// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract Area{
    uint public  base;
    uint public  height;
    uint public  length;
    uint public  width;
    uint public  numberOfSides;


    function AreaOfATriangle(uint _base, uint _height) public  returns(uint AreaOf){
            base= _base;
            height= _height;
            AreaOf =  (base * height)/2;
            return AreaOf;
    }
    function AreaOfARectangle(uint _length, uint _width) public   returns(uint){
            length= _length;
            width= _width;
           uint AreaOf = length * width;
            return AreaOf;
    }
    function AreaOfASquare(uint _numberOfSides) public   returns(uint AreaOf){
            numberOfSides= _numberOfSides;
            AreaOf = numberOfSides ** 2;
            return AreaOf;
    }
  
}
