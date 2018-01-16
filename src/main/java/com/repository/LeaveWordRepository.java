package com.repository;

import com.model.LeaveWord;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * @author: zhangocean
 * @Date: Created in 21:33 2018/1/15
 * Describe:
 */
@Repository
public interface LeaveWordRepository extends JpaRepository<LeaveWord, Integer> {
}
