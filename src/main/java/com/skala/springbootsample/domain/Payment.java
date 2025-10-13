package com.skala.springbootsample.domain;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
public class Payment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private double amount;
    private String method;  // 예: card, cash
    private String transactionId;
    private LocalDateTime paidAt;

    @ManyToOne
    @JoinColumn(name = "booking_id")
    private Booking booking;

    // Getters and Setters
}
