// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract Area{

    function AreaOfATriangle(uint _base, uint _height) public  pure returns(uint AreaOf){
            AreaOf =  (_base * _height)/2;
            return AreaOf;
    }
    function AreaOfARectangle(uint _length, uint _width) public pure   returns(uint){
            
           uint AreaOf = _length * _width;
            return AreaOf;
    }
    function AreaOfASquare(uint _numberOfSides) public pure   returns(uint AreaOf){
            AreaOf = _numberOfSides ** 2;
            return AreaOf;
    }
  
}
