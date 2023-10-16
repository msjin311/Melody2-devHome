package com.acorn.melody2.repository;


import com.acorn.melody2.entity.UserAccount;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserAccountRepository extends JpaRepository<UserAccount, Long> {
    // You can add custom query methods here if needed

    //무상 로그인
    UserAccount findByAccountIdAndPassword(String accountId, String password);

    //정민 로그인
    UserAccount findByAccountId(String accountId);
}
