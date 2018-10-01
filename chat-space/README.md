# README

## usersテーブル
|column|type|options|
|------|----|-------|
|name|string|null: false, unique: true|
|email|string|null: false, unique: true|

### Association
has_many :groups
has_many :messages


## groupsテーブル
|column|type|options|
|------|----|-------|
|name|string|null: false, unique: true|

### Association
has_many :users
has_many :messages


## messagesテーブル
|column|type|options|
|------|----|-------|
|body|text|null: false|
|image|string||
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
blongs_to :user
blongs_to :group


## membersテーブル
|column|type|options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true||

### Association
has_many :users
has_many :groups








