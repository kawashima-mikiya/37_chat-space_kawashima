# README

## usersテーブル
|column|type|options|
|------|----|-------|
|name|string|null: false, unique: true, add: index|

### Association
- has_many :groups, through: :members
- has_many :messages
- has_many :members

*****

## groupsテーブル
|column|type|options|
|------|----|-------|
|name|string|null: false, unique: true|

### Association
- has_many :users, through: :members
- has_many :messages
- has_many :members

*****


## messagesテーブル
|column|type|options|
|------|----|-------|
|body|text||
|image|string||
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- blongs_to :user
- blongs_to :group

*****

## membersテーブル
|column|type|options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group









