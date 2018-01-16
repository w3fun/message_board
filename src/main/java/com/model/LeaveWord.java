package com.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.util.Date;

/**
 * @author: zhangocean
 * @Date: Created in 21:11 2018/1/15
 * Describe:
 */

@ToString
@Getter
@Setter
@Entity
@Table(name = "leaveword")
public class LeaveWord {

    @Id
    @GeneratedValue
    private Integer id;

    @Column(name = "utterer")
    private String utterer;

    @Column(name = "publish_date")
    private Date publishDate;

    @Column(name = "content")
    private String content;

    public LeaveWord() {
    }

    public LeaveWord(String utterer, Date publishDate, String content) {
        this.utterer = utterer;
        this.publishDate = publishDate;
        this.content = content;
    }
}
