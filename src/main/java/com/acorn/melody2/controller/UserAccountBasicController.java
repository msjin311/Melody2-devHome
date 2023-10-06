package com.acorn.melody2.controller;

import com.acorn.melody2.entity.UserAccount;
import com.acorn.melody2.service.UserAccountService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/user-accounts")
public class UserAccountBasicController {
    private static final Logger logger = LoggerFactory.getLogger(UserAccountBasicController.class);
    private final UserAccountService userAccountService;

    @Autowired
    public UserAccountBasicController(UserAccountService userAccountService) {
        this.userAccountService = userAccountService;
    }

    @GetMapping
    public ResponseEntity<List<UserAccount>> getAllUserAccounts() {
        List<UserAccount> userAccounts = userAccountService.getAllUserAccounts();
        return ResponseEntity.ok(userAccounts);
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserAccount> getUserAccountById(@PathVariable Long id) {
        Optional<UserAccount> userAccount = userAccountService.getUserAccountById(id);
        return userAccount.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<UserAccount> createUserAccount(@RequestBody UserAccount userAccount) {
        UserAccount createdUserAccount = userAccountService.createUserAccount(userAccount);
        return new ResponseEntity<>(createdUserAccount, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<UserAccount> updateUserAccount(@PathVariable Long id, @RequestBody UserAccount updatedUserAccount) {
        UserAccount updatedAccount = userAccountService.updateUserAccount(id, updatedUserAccount);
        return ResponseEntity.ok(updatedAccount);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUserAccount(@PathVariable Long id) {
        userAccountService.deleteUserAccount(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/login")
    public ResponseEntity<UserAccount> login(@RequestParam String id, @RequestParam String password) {
        logger.warn(id);
        logger.warn(password);
        Optional<UserAccount> userAccount = Optional.ofNullable(userAccountService.login(id, password));
        if (userAccount.isPresent() && userAccount.get().getPassword().equals(password)) {
            // 로그인 성공
            return ResponseEntity.ok(userAccount.get());
        } else {
            // 로그인 실패
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }
}
