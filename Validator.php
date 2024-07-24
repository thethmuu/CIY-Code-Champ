<?php

class Validator
{
    public function string($value, $min = 1, $max = INF)
    {
        return strlen($value) >= $min && strlen($value) <= $max;
    }
}
