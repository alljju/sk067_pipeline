package com.skala.springbootsample.domain;

import javax.persistence.*;
import java.util.List;

@Entity
public class ParkingLot {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String name;
    private String address;
    private double latitude;
    private double longitude;
    private double pricePerHour;
    private double rating;
    private int reviewCount;
    private int availableSpots;
    private int totalSpots;

    @ElementCollection
    private List<String> features;  // 예: indoor, 24hours, cctv, ev_charging

    @Embedded
    private OperatingHours operatingHours;

    // Getters and Setters
}
