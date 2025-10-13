package java.com.skala.springbootsample.controller;

import com.skala.springbootsample.dto.BookingRequestDto;
import com.skala.springbootsample.service.BookingService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/bookings")
public class BookingController {

    private final BookingService bookingService;

    public BookingController(BookingService bookingService) {
        this.bookingService = bookingService;
    }

    @PostMapping
    public ResponseEntity<?> createBooking(@RequestBody BookingRequestDto requestDto) {
        return ResponseEntity.ok(bookingService.createBooking(requestDto));
    }

    @GetMapping("/{bookingId}")
    public ResponseEntity<?> getBooking(@PathVariable String bookingId) {
        return ResponseEntity.ok(bookingService.getBooking(bookingId));
    }

    @DeleteMapping("/{bookingId}")
    public ResponseEntity<?> cancelBooking(@PathVariable String bookingId) {
        return ResponseEntity.ok(bookingService.cancelBooking(bookingId));
    }
}
