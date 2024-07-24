<?php

class Validator
{
    public function string($value, $min, $max)
    {
        $value = trim($value);


        return strlen($value) >= $min && strlen($value) <= $max;
    }
}
