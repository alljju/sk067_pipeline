package com.skala.springbootsample.dto;

import java.time.LocalDateTime;

public class ParkingRequestDto {
    private String location;
    private double latitude;
    private double longitude;
    private LocalDateTime startDateTime;
    private LocalDateTime endDateTime;
    private int radius;
    private String sortBy;

    // Getters and Setters
}
