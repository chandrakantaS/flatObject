<?php

$data = [
  "name" => [
      "firstname" => "Adil",
      "morename" => "more values"
    ],
  "experiences" => [
      [
        "company" => "Edunuts",
        "years" => 5
      ],
      [
        "company" => "Google",
        "years" => 3
      ]
    ]
];

class FlattObj {
  public function __construct($obj) {
    $this->flat = [];
    $this->joinKeys($obj);
    return $this->flat;
  }

  public function joinKeys($a, $x = false) {

    foreach ($a as $key => $value) {
      $newKey = $key;
      if ($x) {
        $newKey = $x . '.' . $key;
      }

      $this->flat[$newKey] = $a[$key];
      if (gettype($this->flat[$newKey]) === 'array') {

        $d = $this->flat[$newKey];
        foreach ($d as $ky => $val) {
          if (gettype($d[$ky]) === 'array') {
            $this->joinKeys($d[$ky], $newKey . '.' . $ky);
          } else {
            $this->flat[$newKey . '.' . $ky] = $d[$ky];
          }
        }
        unset($this->flat[$newKey]);
      }
    }
  }
}

$m = new FlattObj($data);

print_r($m);
