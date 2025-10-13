package com.skala.springbootsample.dto;

import java.time.LocalDateTime;

public class BookingRequestDto {
    private Long parkingId;
    private LocalDateTime startDateTime;
    private LocalDateTime endDateTime;
    private VehicleDto vehicle;
    private UserDto user;
    private PaymentDto payment;

    // Getters and Setters
}
