#include "CompareArray.h"

UInt8 Compare_Arrays(UInt8 *array_prev, 
                     UInt8 array_prev_size, 
                     UInt8 *array_start, 
                     UInt8 array_start_size){
    if (array_prev_size != array_start_size) return ARE_NOT_COMPARABLE;
    for (UInt8 i = 0; i < array_prev_size; i++)
        if (*(array_prev + i) != *(array_start + i))
            return ARE_DIFFERENT;

    return ARE_EQUALS;
}