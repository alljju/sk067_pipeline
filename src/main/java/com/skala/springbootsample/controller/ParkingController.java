package com.skala.springbootsample.controllerr;

import com.skala.springbootsample.dto.ParkingRequestDto;
import com.skala.springbootsample.service.ParkingService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/parking")
public class ParkingController {

    private final ParkingService parkingService;

    public ParkingController(ParkingService parkingService) {
        this.parkingService = parkingService;
    }

    @PostMapping("/search")
    public ResponseEntity<?> searchParking(@RequestBody ParkingRequestDto requestDto) {
        return ResponseEntity.ok(parkingService.searchParking(requestDto));
    }

    @GetMapping("/{parkingId}/availability")
    public ResponseEntity<?> getParkingAvailability(@PathVariable Long parkingId,
                                                    @RequestParam String startDateTime,
                                                    @RequestParam String endDateTime) {
        return ResponseEntity.ok(parkingService.checkAvailability(parkingId, startDateTime, endDateTime));
    }
}
