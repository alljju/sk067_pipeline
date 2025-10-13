package com.skala.springbootsample.domain;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String bookingId;
    
    @ManyToOne
    @JoinColumn(name = "parking_lot_id")
    private ParkingLot parkingLot;

    private LocalDateTime startDateTime;
    private LocalDateTime endDateTime;

    @Embedded
    private Vehicle vehicle;

    @Embedded
    private User user;

    @Embedded
    private Payment payment;

    private String status;

    // Getters and Setters
}
