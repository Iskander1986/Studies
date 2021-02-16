#include <stdio.h>
#include "CompareArray.h"

int main()
{
      UInt8 array_prev[5] = {1, 2, 3, 4, 5},
            array_start[5] = {1, 2, 3, 5, 4};
      UInt8 array_prev_size = sizeof(array_prev) / sizeof(UInt8),
            array_start_size = sizeof(array_start) / sizeof(UInt8);
      // call function to compare arrays
      // array it`s always passed as reference
      // doen`t matter with you using the symbology (&) or not
      UInt8 return_of_function = Compare_Arrays(array_prev,
                                                array_prev_size,
                                                array_start,
                                                array_start_size);
      printf("%d\r\n", return_of_function);

      array_start[0] = 1;
      array_start[1] = 2;
      array_start[2] = 3;
      array_start[3] = 4;
      array_start[4] = 5;
      return_of_function = Compare_Arrays(array_prev,
                                          array_prev_size,
                                          array_start,
                                          array_start_size);
      printf("%d", return_of_function);
      return 0;
}