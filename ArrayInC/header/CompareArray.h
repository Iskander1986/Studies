typedef unsigned int UInt8;

#define ARE_EQUALS 0U
#define ARE_DIFFERENT 1U
#define ARE_NOT_COMPARABLE 2U

UInt8 Compare_Arrays(UInt8 *array_prev,
                     UInt8 array_prev_size,
                     UInt8 *array_start,
                     UInt8 array_start_size);