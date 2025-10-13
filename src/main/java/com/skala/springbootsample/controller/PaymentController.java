package com.skala.springbootsample.controller;

import com.skala.springbootsample.dto.PaymentRequestDto;
import com.skala.springbootsample.service.PaymentService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/payments")
public class PaymentController {

    private final PaymentService paymentService;

    public PaymentController(PaymentService paymentService) {
        this.paymentService = paymentService;
    }

    @PostMapping
    public ResponseEntity<?> processPayment(@RequestBody PaymentRequestDto requestDto) {
        return ResponseEntity.ok(paymentService.processPayment(requestDto));
    }
}
