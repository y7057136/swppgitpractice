#!/usr/bin/python

def is_prime(n):
    p = True;
    for index in range(2, n):
        if(n % index == 0):
            p = False;
    return p

for index in range(5,50):
    if(is_prime(index)):
        print("%d is a prime number" %index)

