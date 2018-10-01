# README

## membersテーブル
|column|type|options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group

*****

## usersテーブル
|column|type|options|
|------|----|-------|
|name|string|null: false, unique: true, index: true|

### Association
- has_many :messages
- has_many :members
- has_many :groups, through: :members

*****

## groupsテーブル
|column|type|options|
|------|----|-------|
|name|string|null: false, unique: true|

### Association
- has_many :messages
- has_many :members
- has_many :users, through: :members

*****

## messagesテーブル
|column|type|options|
|------|----|-------|
|body|text||
|image|text||
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group











